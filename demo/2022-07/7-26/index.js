/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-07-26 10:20:19
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2022-07-26 10:50:07
 * @FilePath: /DailyLearning/demo/2022-07/7-26/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
document.getElementsByTagName('div')[0].addEventListener('mouseenter', function (e) {
    this.style.setProperty('--mouse-x', e.clientX);
    this.style.setProperty('--mouse-y', e.clientY);
  })
  document.getElementsByTagName('div')[0].addEventListener('mousemove', function (e) {
    this.style.setProperty('--mouse-x', e.clientX);
    this.style.setProperty('--mouse-y', e.clientY);
  })
  document.getElementsByTagName('div')[0].addEventListener('mouseleave', function (e) {
    this.style.setProperty('--mouse-x', -999);
    this.style.setProperty('--mouse-y', -999);
  })
  
  CSS.paintWorklet.addModule(`data:application/javascript;charset=utf8,${encodeURIComponent(`
    class MagnetMatrixPaintWorklet {
      static get inputProperties() { return ['--mouse-x', '--mouse-y', '--magnet-color', '--magnet-size', '--magnet-gap', '--magnet-radius']; }
  
      paint(ctx, size, props) {
        const mouseX = parseInt(props.get('--mouse-x'))
        const mouseY = parseInt(props.get('--mouse-y'))
        const color = props.get('--magnet-color')
        const lineWidth = parseInt(props.get('--magnet-size'))
        const gap = parseInt(props.get('--magnet-gap'))
        const radius = parseInt(props.get('--magnet-radius'))
        ctx.lineCap = "round";
        for (let i = 0; i * gap < size.width; i++) {
          for (let j = 0; j * gap < size.height; j++) {
            const posX = i * gap
            const posY = j * gap
            const distance = Math.sqrt(Math.pow(posX - mouseX, 2) + Math.pow(posY - mouseY, 2))
            const width = distance < radius ? (1 - distance / radius * distance / radius) * gap * 0.4 : 0
            const startPosX = posX - width * 0.5
            const endPosX = posX + width * 0.5
            const rotate = Math.atan2(mouseY - posY, mouseX - posX)
  
            ctx.save()
            ctx.beginPath();
            ctx.translate(posX, posY);
            ctx.rotate(rotate);
            ctx.translate(-posX, -posY);
            ctx.moveTo(startPosX, posY);
            ctx.strokeStyle = color
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";
            ctx.lineTo(endPosX, posY);
            ctx.stroke()
            ctx.closePath()
            ctx.restore()
          }
        }
      }
    }
    // 注册绘制机器
    registerPaint('magnet-matrix', MagnetMatrixPaintWorklet);
  `)}`)