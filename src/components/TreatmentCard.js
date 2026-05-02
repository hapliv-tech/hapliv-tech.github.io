import React from 'react';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

const TreatmentCard = ({
  icon,
  title,
  description,
  features = [],
  slug
}) => {
  const treatmentSlug =
    slug ||
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  return (
    <div className="h-full overflow-hidden transition-all duration-300 bg-white border-0 shadow-md group hover:shadow-lg hover:-translate-y-2 rounded-xl">
      <div className="px-6 pt-6 pb-4 text-center">
        <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 text-white transition-transform duration-300 rounded-full bg-gradient-to-br from-primary to-orange-400 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
      </div>
      <div className="px-6 pt-0 pb-6">
        <p className="mb-4 leading-relaxed text-center text-gray-500">
          {description}
        </p>
        {features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-500">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={`/treatments/${treatmentSlug}`}
          className="flex items-center justify-center w-full py-2 font-medium transition-all duration-300 bg-gray-100 rounded-lg hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white"
        >
            Learn More
            <MdArrowForwardIos className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default TreatmentCard;
