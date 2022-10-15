import React from "react";
import Container from "./ui/Container";

const Map = () => {
  return (
    <Container>
      <iframe
        className="aspect-square w-full rounded-md shadow lg:aspect-[16/8]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11991.080781535138!2d69.25198195!3d41.292105649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ae542534851%3A0x4bfc26ef2a1792a8!2sTashkent%20State%20University%20of%20the%20Uzbek%20language%20and%20literature!5e0!3m2!1sen!2s!4v1665502225387!5m2!1sen!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Map;
