"use client";

export default function ContactMap() {
  return (
    <section className="py-16  to-white">
      <div className="container mx-auto px-4">
        <div className="h-full flex flex-col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.123456789!2d74.3333333!3d35.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU1JzAwLjAiTiA3NMKwMjAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "100vh" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="STG Office Location"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
