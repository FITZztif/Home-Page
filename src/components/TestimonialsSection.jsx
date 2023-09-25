import React from 'react';

function TestimonialsSection() {
    const testimonials = [
        { content: "Around U has been a lifesaver! I found local events that introduced me to Australian culture and made some great friends along the way.", author: 'John Doe' },
        { content: "Navigating life in a new country can be daunting. Thanks to Around U, I feel more connected to my local community and more at home in Australia.", author: 'Jane Smith' },
        { content: "From finding the best local cafes to attending cultural festivals, Around U has truly enhanced my student life in Australia.", author: 'Fitz Simons' },
    ];

    return (
        <section className="testimonials-container" id="testimonials" data-aos="fade-up">
            {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                    <p className="testimonial-content">"{testimonial.content}"</p>
                    <span className="testimonial-author">- {testimonial.author}</span>
                </div>
            ))}
        </section>
    );
}

export default TestimonialsSection;
