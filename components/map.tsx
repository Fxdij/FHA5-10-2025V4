export function Map() {
  return (
    <div className="w-full h-[300px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.8960510565286!2d-79.41390548451425!3d43.75926997911819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d654206e463%3A0xd8e4fa3641ff06f!2s25%20Sheppard%20Ave%20W%20Suite%20300%2C%20Toronto%2C%20ON%20M2N%206S6!5e0!3m2!1sen!2sca!4v1621234567890!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  )
}
