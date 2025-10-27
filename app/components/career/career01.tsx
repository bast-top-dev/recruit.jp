"use client";

import { useState } from "react";
import Image from 'next/image';
import p_bg_pink_border_03 from '../../../public/img/p-bg_pink_border_03.gif';
import top_cycle_point_list_img01 from '../../../public/img/l-top_cycle_point_list_img01.webp';
import top_cycle_point_list_img02 from '../../../public/img/l-top_cycle_point_list_img02.webp';
import top_cycle_point_list_img03 from '../../../public/img/l-top_cycle_point_list_img03.webp';
import top_cycle_point_list_img04 from '../../../public/img/l-top_cycle_point_list_img04.webp';
import p_bg_pink_dot01 from '../../../public/img/p-bg_pink_dot01.gif';
import p_illust_teacher01 from '../../../public/img/p-illust_teacher01.svg';

const ArrowIcon = () => (
  <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1.35rem] h-auto">
    <path d="M8 1L13 6L8 11" stroke="var(--colorBrown)" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 6L13 6" stroke="var(--colorBrown)" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PointBadge = ({ number }: { number: number }) => (
  <span className="flex flex-col items-center justify-center w-[4.4rem] h-[4.4rem] gap-[0.3rem] font-bold text-[1.8rem] leading-none font-['Comfortaa'] tracking-[0.04em] absolute top-[-0.2rem] left-[0.4rem] z-[100] md:top-[0.2rem] md:left-[0.3rem]">
    <span className="absolute inset-0 -z-10 bg-[url('/img/p-list_ttl_yellow_icn.png')] bg-contain bg-no-repeat" />
    <span className="pt-[0.8rem] font-bold text-[0.8rem] font-['Comfortaa']">POINT</span>
    {number}
  </span>
);

const PointCard = ({
  number,
  image,
  title,
  description,
  linkText,
  hasDropdown = false,
  dropdownItems = []
}: {
  number: number;
  image: any;
  title: string;
  description: string;
  linkText: string;
  hasDropdown?: boolean;
  dropdownItems?: string[];
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative w-full text-center lg:w-[28rem]">
      <PointBadge number={number} />

      <div className="relative z-[1] mb-[1.6rem] overflow-hidden rounded-[9rem] lg:rounded-[12rem] lg:mb-[1.2rem]">
        <div className="absolute top-0 left-[10%] w-full h-full scale-[2] bg-[url('/img/p-icn_sakura.png')] bg-contain bg-no-repeat z-[1] transition-transform duration-[2s] pointer-events-none" />
        <Image
          className="relative z-[2] w-full h-auto"
          src={image}
          alt={title}
        />
      </div>

      <h4 className="mb-0 font-medium text-[1.8rem] leading-[1.6] tracking-[0.04em] lg:mb-[0.8rem]">
        {title}
      </h4>

      <p className="mb-[0.7rem] text-[1.4rem] leading-[1.6] tracking-[0.04em] px-[1rem] text-left lg:px-0 lg:text-center">
        {description}
      </p>

      <div className="relative">
        {hasDropdown ? (
          <>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-end relative left-[-1rem] ml-auto gap-[1rem] font-medium text-[1.6rem] leading-[1.4] cursor-pointer transition-opacity hover:opacity-100 group"
            >
              {linkText}
              <span className="flex justify-center items-center aspect-square w-[3rem] h-[3rem] rounded-full bg-[var(--colorPink)] lg:w-[4rem] lg:h-[4rem] group-hover:bg-[var(--hoverColorPink)]">
                <ArrowIcon />
              </span>
            </button>

            {isDropdownOpen && (
              <ul className="inline-grid absolute z-[4] left-1/2 -translate-x-1/2 top-[4.2rem] lg:top-[5rem] p-[1.7rem_1.5rem] gap-[1rem] border border-[var(--colorBrown)] rounded-[2rem] bg-white">
                <span className="absolute top-[-1.2rem] left-1/2 -translate-x-1/2 w-[1rem] h-[1.5rem] bg-[url('/img/p-icn_triangle_brown.svg')] bg-contain bg-no-repeat" />
                {dropdownItems.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="flex items-center justify-center w-[18rem] min-h-[4rem] rounded-[100vw] bg-[var(--colorLightPink)] font-medium text-[1.6rem] leading-[1.4] text-center lg:text-[1.4rem] transition-colors hover:bg-[var(--hoverColorPink)]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <a
            href="#"
            className="flex items-center justify-end relative left-[-1rem] ml-auto gap-[1rem] font-medium text-[1.6rem] leading-[1.4] transition-opacity hover:opacity-100 group"
          >
            {linkText}
            <span className="flex justify-center items-center aspect-square w-[3rem] h-[3rem] rounded-full bg-[var(--colorPink)] lg:w-[4rem] lg:h-[4rem] group-hover:bg-[var(--hoverColorPink)]">
              <ArrowIcon />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

const Career01 = () => {
  const points = [
    {
      number: 1,
      image: top_cycle_point_list_img01,
      title: "一人ひとりに寄り添う保育",
      description: "大人の指示で動かすのではなくおうちのようにのびのびと過ごせる場所で優しく見守り、気持ちを受け止めながら心を育んでいくことを大切にしています。",
      linkText: "さくらさくみらいの保育"
    },
    {
      number: 2,
      image: top_cycle_point_list_img02,
      title: "保育環境・仕事の効率化",
      description: "各クラスにタブレットを配布、電子連絡帳の導入、絵本ライブラリーの設置、教材庫・収納スペースの確保etc...仕事を効率的に進められる環境を整えています。",
      linkText: "働きやすい環境づくり"
    },
    {
      number: 3,
      image: top_cycle_point_list_img03,
      title: "充実した福利厚生",
      description: "ワークライフバランス◎、年間休日125日以上や一人暮らし支援、スキルを磨く研修etc...仕事もプライベートも充実できる制度が多数あります。",
      linkText: "福利厚生・社宅・研修",
      hasDropdown: true,
      dropdownItems: ["福利厚生", "社宅", "研修・キャリア"]
    },
    {
      number: 4,
      image: top_cycle_point_list_img04,
      title: "本部サポートもあり安心",
      description: "園内はもちろんのこと、本部職員や専門カウンセラーなどに相談も可能。悩みを一人で抱えずに働くことができる環境があります。",
      linkText: "サポート・ケア"
    }
  ];

  return (
    <>
      <section className="relative mb-[-9rem] pt-[3.3rem] pb-[8.3rem] bg-[var(--bgColorBoldPink)] lg:pt-[3.3rem] lg:pb-0">
        {/* Top Background Wave */}
        <svg
          className="absolute top-[-5.9rem] left-0 w-full h-[6rem] lg:top-[-19.9rem] lg:h-[20rem]"
          viewBox="0 0 1366 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="m1366 35.3576s-64.98-27.25913-237.32-33.93422c-172.34-6.6751-372.93 7.23384-591.89 104.57262-218.96 97.339-536.79 38.939-536.79 38.939v55.065h1366z"
            fill="var(--bgColorBoldPink)"
          />
        </svg>

        <div className="relative w-full max-w-[136.6rem] mx-auto px-[1.5rem] lg:px-[6.3rem]">
          <div className="mb-[12rem] lg:mb-[17rem]">
            <div className="flex flex-col items-center justify-between px-0 gap-[3rem] lg:flex-row-reverse lg:px-[3.3rem] lg:gap-[3.8rem]">
              <Image
                className="absolute bottom-[-15rem] left-[-13rem] z-[1] w-[40.3rem] min-w-[40.3rem] lg:bottom-[-19rem] lg:left-[-6rem]"
                src={p_bg_pink_border_03}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Points Section */}
        <div className="relative bg-[var(--bgColorPink)] pb-[6rem] lg:pb-0">
          <div className="relative z-[1] top-[1rem] w-full max-w-[136.6rem] mx-auto px-[1.5rem] lg:top-[-9.6rem] lg:px-[6.3rem]">
            <h3 className="mb-[2rem] text-center font-normal text-[2.6rem] leading-[1.6] tracking-[0.04em] lg:mb-[4rem] lg:text-[3.2rem]">
              <span className="block mb-[0.5rem] font-medium text-[1.4rem] leading-[1.4] tracking-[0.04em] lg:text-[1.8rem] lg:leading-[1.6]">
                笑顔のサイクルを実現する
              </span>
              さくらさくみらいの
              <br className="lg:hidden" />
              4つのポイント
            </h3>

            <ul className="relative lg:my-20 flex flex-col items-center gap-[5rem] md:grid md:grid-cols-4">
              {points.map((point, index) => (
                <li
                  key={point.number}
                  className={`relative w-[85%] max-w-[28rem] text-center transform transition-all duration-500
        ${index % 2 === 0 ? 'self-start md:self-auto' : 'self-end md:self-auto'}
        ${index % 2 === 1 ? 'md:translate-y-24' : 'md:-translate-y-2'}
      `}
                >
                  {/* MOBILE - Vertical line */}
                  {index !== points.length - 1 && (
                    <img
                      src="/img/l-top_cycle_point_list_icn_sp.png"
                      alt="timeline-mobile"
                      className={`
            absolute top-20 h-full object-contain md:hidden pointer-events-none z-[-1]
            ${index % 2 === 0 ? 'right-[-2rem] scale-x-100' : 'left-[-2rem] scale-x-[-1]'}
          `}
                    />
                  )}

                  {/* MD & LG - Horizontal line */}
                  {index !== points.length - 1 && (
                    <img
                      src="/img/l-top_cycle_point_list_icn_pc.png"  // <- SAME IMAGE FOR md & lg
                      alt="timeline-desktop"
                      className={`
            hidden md:block absolute   -translate-y-1/2 w-[18rem] object-contain pointer-events-none z-[-1]
            ${index % 2 === 0 ? 'right-[-20rem] scale-x-100 top-1/2' : 'left-[20rem] scale-x-[-1] top-32'}
          `}
                    />
                  )}

                  <PointCard {...point} />
                </li>
              ))}
            </ul>



          </div>

          {/* Bottom Wave */}
          <svg
            className="absolute top-[-5.9rem] left-0 w-full h-[6rem] lg:top-[-19.9rem] lg:h-[20rem]"
            viewBox="0 0 1366 208"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="m1366 207.11v-40c-341.5 0-341.5-167.10964905-683-167.10964905s-341.5 167.10964905-683 167.10964905v40z"
              fill="var(--bgColorPink)"
            />
          </svg>
        </div>
      </section>

      {/* Link Section */}
      <div className="relative pt-[13rem] pb-[11.9rem] bg-[var(--bgColorYellow)] lg:pt-[24.9rem] lg:pb-0">
        <div className="relative w-full max-w-[136.6rem] mx-auto px-[1.5rem] lg:px-[6.3rem]">
          <Image
            className="absolute z-[1] top-[-10rem] left-[-1rem] w-[19.7rem] lg:top-[-20rem] lg:left-[9.5rem] lg:w-[36.2rem]"
            src={p_bg_pink_dot01}
            alt=""
          />
          <Image
            className="absolute z-[1] top-[-16.2rem] right-[-0.4rem] w-[14.1rem] scale-75 lg:top-[-24.4rem] lg:right-[26.2rem] lg:scale-100"
            src={p_illust_teacher01}
            alt=""
          />
        </div>

        {/* Top Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-[6rem] lg:h-[20rem]"
          viewBox="0 0 1366 208"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="m1366 0v40c-341.5 0-341.5 167.11-683 167.11s-341.5-167.11-683-167.11v-40z"
            fill="var(--bgColorPink)"
          />
        </svg>
      </div>
    </>
  );
};

export default Career01;