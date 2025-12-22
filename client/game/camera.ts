import { createCam } from '@trippler/tr_kit/client'

export let lastCamHandle: number

export default (fadeIn: number, fadeOut: number, delay: number) => {
  const cam: [number, number, number, number] = [ 479.3787, -1316.2129, 29.2034, 62.6716 ]
  lastCamHandle = createCam({
    coords: cam,
    rotation: { vertical: 2.0, horizontal: 0.0 },
    details: {
      fov: 50.0,
      fadeIn: fadeIn ?? 200,
      fadeOut: fadeOut ?? 200,
      delay: delay ?? 2000,
    }
  })
}