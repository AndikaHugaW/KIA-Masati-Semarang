'use client';

import React from 'react';

export const BengkelKomitmenSection: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12 border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-left space-y-6 sm:space-y-8">
        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-medium leading-relaxed sm:leading-loose">
          Kia berkomitmen menjaga Anda dari kerusakan tidak terduga atau terjadinya kecelakaan, sehingga Anda dapat memiliki hidup yang nyaman dan bermakna. Untuk mencapainya, kami memanfaatkan teknologi canggih dan mekanik berpengalaman demi menghemat waktu dan biaya Anda.
        </p>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed sm:leading-loose">
          Komitmen kami pada keselamatan juga meliputi penggunaan material daur ulang pada suku cadang dan fasilitas, serta proses yang memperhatikan keberlanjutan lingkungan. Percayakan kami dalam menjaga performa Kia Anda tetap mulus sambil memperhatikan waktu, biaya, hingga bumi.
        </p>
      </div>
    </section>
  );
};
