export default function Testimonials() {
  const testimonials = [
    {
      name: "Kathryn Molnar",
      text: `We worked with Eric on designing our dream home. He was friendly and very understanding. Our schedule only allowed us to meet in the evening after 6:00 pm. Eric lived at least 30 minutes from us and always came to our house to alleviate our stress. He also worked hard to understand our vision.`,
    },
    {
      name: "Dave Larson",
      text: `My experience with Eric (Gage Home Designs) was excellent. He designed a home for my family that was perfect for our needs and budget. We do not have any issues after several years of living in the house. Contractor /Tradesman loved the detail in the drawings.`,
    },
    {
      name: "Adam Aulbach",
      text: `We worked with Gage Home Designs to help us design our highly-customized dream home. Eric is a consummate professional and well-known in the industry for his high-quality work, attention to detail and outstanding drawings.`,
    },
    {
      name: "Kathy & John",
      text: `Eric was a pleasure to work with. He was very patient and understanding of our needs. He was always available to answer our questions and made the process easy and enjoyable. We are thrilled with the final design of our home.`,
    },
    {
      name: "Sarah & Mike",
      text: `We had a fantastic experience working with Eric. He took the time to understand our vision and brought it to life in a way that exceeded our expectations. His attention to detail and creativity made all the difference.`,
    },
    {
      name: "Jessica & Tom",
      text: `Eric was incredibly helpful throughout the entire design process. He listened to our ideas and provided valuable feedback that helped us create a home that we love. We couldn't be happier with the results!`,
    },
    {
      name: "Emily & Jake",
      text: `Working with Eric was a dream come true. He is not only talented but also genuinely cares about his clients. He made sure that every detail was perfect and that we were completely satisfied with the design.`,
    },
    {
      name: "Laura & Chris",
      text: `Eric's expertise and creativity were invaluable in designing our new home. He was always available to answer our questions and provided us with a beautiful design that perfectly fits our lifestyle. We highly recommend him!`,
    },
  ];

  const lastTwo = testimonials.slice(-2);
  const others = testimonials.slice(0, -2);

  return (
    <section className="py-16 w-full h-full" data-aos="fade-up" data-aos-duration="1000" id="testimonials">
    <div className="items-stretch gap-0 grid grid-cols-1 md:grid-cols-3 w-full h-full">
      {others.map((testimonial, index) => (
        <div
          key={index}
          className="flex flex-col bg-white p-8 border border-gray-300 h-full text-center"
        >
          <div className="mb-4 text-gray-500 text-4xl">“</div>
          <h3 className="mb-4 font-semibold text-gray-800 text-lg">{testimonial.name}</h3>
          <p className="flex-1 text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
        </div>
      ))}
      <div className="flex md:flex-row flex-col col-span-1 md:col-span-3 w-full h-full">
        {lastTwo.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex flex-col bg-white p-8 border border-gray-300 w-full md:w-1/2 h-full text-center"
          >
            <div className="mb-4 text-gray-500 text-4xl">“</div>
            <h3 className="mb-4 font-semibold text-gray-800 text-lg">{testimonial.name}</h3>
            <p className="flex-1 text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
