import React from 'react';

const HelpCenter: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      <p className="text-lg mb-4">
        We are here to help! If you need assistance, check out the options below or contact us directly at <a href="mailto:help@ciptadaya.com" className="text-blue-600 underline">help@ciptadaya.com</a>.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Billing & Payments: Issues with payments or invoices? Reach out to our finance team at <a href="mailto:finance@ciptadaya.com" className="text-blue-600 underline">finance@ciptadaya.com</a>.</li>
        <li>Technical Support: For problems related to our website or services, email <a href="mailto:techsupport@ciptadaya.com" className="text-blue-600 underline">techsupport@ciptadaya.com</a>.</li>
        <li>Service Requests: Need information about our green energy solutions? Contact our customer service at <a href="mailto:info@ciptadaya.com" className="text-blue-600 underline">info@ciptadaya.com</a>.</li>
        <li>Office Hours: Monday – Friday, 9 AM – 5 PM (GMT+7).</li>
      </ul>
    </div>
  );
};

export default HelpCenter;
