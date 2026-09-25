// app/fonts.ts
import { Vazirmatn, Noto_Nastaliq_Urdu, Amiri_Quran } from 'next/font/google';

export const vazirmatn = Vazirmatn({ subsets: ['arabic'] });

export const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap'
});

export const quran = Amiri_Quran({ weight: ['400'], subsets: ['arabic'] });
