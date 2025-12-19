"use client"

import { useEffect, useRef } from "react"

export default function LocationMap() {
  const mapRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // This would normally load the map when the component mounts
    // For now, we're using an iframe with Google Maps embed
  }, [])

  return (
    <iframe
      ref={mapRef}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5429773827267!2d73.9163!3d18.5869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c7c437%3A0x93a5869a1c6c9fa1!2sKohinoor%20Vivacity!5e0!3m2!1sen!2sin!4v1621436289000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Hotel Raghunandan Location - Kohinoor Vivacity, Dhanori, Pune"
    ></iframe>
  )
}
