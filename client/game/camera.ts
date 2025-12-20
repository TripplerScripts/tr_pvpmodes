export let lastCamHandle: number

export default (fadeIn: number, fadeOut: number, delay: number) => {
  const cam = [ 479.3787, -1316.2129, 29.2034, 62.6716 ]
  lastCamHandle = exports.tr_kit.createCam({
    coords: cam,
    rotation: { vertical: 2.0, horizontal: 0.0 },
    more: {
      fov: 50.0,
      fadeIn: fadeIn ?? 200,
      fadeOut: fadeOut ?? 200,
      delay: delay ?? 2000,
    }
  })
}