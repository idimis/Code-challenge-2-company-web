import React from 'react';

const FAQs: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">FAQs</h1>
      <ul className="space-y-4">
        <li>
          <strong>1. What services does Ciptadaya offer?</strong>
          <p>We specialize in providing sustainable energy solutions, including solar power installations, energy efficiency assessments, and consultation for renewable energy projects.</p>
        </li>
        <li>
          <strong>2. How can I sign up for your services?</strong>
          <p>You can sign up by visiting our website and filling out the service request form. Our team will get back to you shortly to discuss your needs.</p>
        </li>
        <li>
          <strong>3. What are the payment options available?</strong>
          <p>We accept various payment methods, including credit/debit cards, bank transfers, and online payment gateways.</p>
        </li>
        <li>
          <strong>4. Do you provide warranties for your installations?</strong>
          <p>Yes, we offer warranties on all our installations, ensuring that you receive the highest quality and reliability from our services.</p>
        </li>
        <li>
          <strong>5. How can I contact customer support?</strong>
          <p>You can reach our customer support team via email at <a href="mailto:support@ciptadaya.com" className="text-blue-600 underline">support@ciptadaya.com</a> or by using the contact form on our website.</p>
        </li>
      </ul>
    </div>
  );
};

export default FAQs;
