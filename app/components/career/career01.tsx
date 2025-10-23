import React from "react";
import Image from 'next/image';
import p_bg_pink_border_03 from '../../../public/img/p-bg_pink_border_03.gif';
import top_cycle_point_list_img01 from '../../../public/img/l-top_cycle_point_list_img01.webp';
import top_cycle_point_list_img02 from '../../../public/img/l-top_cycle_point_list_img02.webp';
import top_cycle_point_list_img03 from '../../../public/img/l-top_cycle_point_list_img03.webp';
import top_cycle_point_list_img04 from '../../../public/img/l-top_cycle_point_list_img04.webp';
import p_bg_pink_dot01 from '../../../public/img/p-bg_pink_dot01.gif';
import p_illust_teacher01 from '../../../public/img/p-illust_teacher01.svg'


const Career01: React.FC = () => {
  return (
    <>
      <section className="career01-top_cycle">
        <div className="career01-top_cycle_wrapper career01-container">
          <div className="career01-top_cycle_about">
            <div className="career01-top_cycle_about_wrapper">
            </div>
            <Image className="career01-top_cycle_about_border_pink_left career01-bg_pink_border_03"
              src={p_bg_pink_border_03} alt="" />
          </div>
        </div>
        <div className="career01-top_cycle_point">
          <div className="career01-top_cycle_point_wrapper career01-container">
            <h3 className="career01-top_cycle_point_ttl career01-ttl">
              <span className="career01-top_cycle_point_ttl_sub">笑顔のサイクルを実現する</span>
              さくらさくみらいの
              <p className="u-sp_show"></p>4つのポイント
            </h3>
            <ul className="career01-top_cycle_point_list_wrapper">
              <li className="career01-top_cycle_point_list js-flow is-active">
                <span className="career01-top_cycle_point_list_number career01-list_ttl_icn_small"><span
                  className="career01-list_ttl_icn_small_txt">POINT</span>1</span>
                <div className="career01-top_cycle_point_list_img_wrapper js-flow_item">
                  <Image className="career01-top_cycle_point_list_img"
                    src={top_cycle_point_list_img01} alt="" />
                </div>
                <h4 className="career01-top_cycle_point_list_ttl">一人ひとりに寄り添う保育</h4>
                <p className="career01-top_cycle_point_list_txt">
                  大人の指示で動かすのではなくおうちのようにのびのびと過ごせる場所で優しく見守り、気持ちを受け止めながら心を育んでいくことを大切にしています。</p>
                <a href=""
                  className="career01-top_cycle_point_list_link career01-hover_bg_arrow">さくらさくみらいの保育<span className="career01-arrow_bg"><span
                    className="career01-arrow_icn"> <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L13 6L8 11" stroke="var(--colorBrown)" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                      <path d="M1 6L13 6" stroke="var(--colorBrown)" strokeLinecap="round" strokeLinejoin="round">
                      </path>
                    </svg>

                  </span></span></a>
              </li>
              <li className="career01-top_cycle_point_list js-flow is-active">
                <span className="career01-top_cycle_point_list_number career01-list_ttl_icn_small"><span
                  className="career01-list_ttl_icn_small_txt">POINT</span>2</span>
                <div className="career01-top_cycle_point_list_img_wrapper js-flow_item">
                  <Image className="career01-top_cycle_point_list_img"
                    src={top_cycle_point_list_img02} alt="" />
                </div>
                <h4 className="career01-top_cycle_point_list_ttl">保育環境・仕事の効率化</h4>
                <p className="career01-top_cycle_point_list_txt">
                  各クラスにタブレットを配布、電子連絡帳の導入、絵本ライブラリーの設置、教材庫・収納スペースの確保etc...仕事を効率的に進められる環境を整えています。</p>
                <a href=""
                  className="career01-top_cycle_point_list_link career01-hover_bg_arrow">働きやすい環境づくり<span className="career01-arrow_bg"><span
                    className="career01-arrow_icn"> <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L13 6L8 11" stroke="var(--colorBrown)" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                      <path d="M1 6L13 6" stroke="var(--colorBrown)" strokeLinecap="round" strokeLinejoin="round">
                      </path>
                    </svg>

                  </span></span></a>
              </li>
              <li className="career01-top_cycle_point_list js-flow is-active">
                <span className="career01-top_cycle_point_list_number career01-list_ttl_icn_small"><span
                  className="career01-list_ttl_icn_small_txt">POINT</span>3</span>
                <div className="career01-top_cycle_point_list_img_wrapper js-flow_item">
                  <Image className="career01-top_cycle_point_list_img"
                    src={top_cycle_point_list_img03} alt="" />
                </div>
                <h4 className="career01-top_cycle_point_list_ttl">充実した福利厚生</h4>
                <p className="career01-top_cycle_point_list_txt">
                  ワークライフバランス◎、年間休日125日以上や一人暮らし支援、スキルを磨く研修etc...仕事もプライベートも充実できる制度が多数あります。</p>
                <div className="career01-top_cycle_point_list_link_position">
                  <button className="career01-top_cycle_point_list_link career01-hover_bg_arrow js-select_btn">福利厚生・社宅・研修<span
                    className="career01-arrow_bg"><span className="career01-arrow_icn"> <svg viewBox="0 0 14 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L13 6L8 11" stroke="var(--colorBrown)" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                      <path d="M1 6L13 6" stroke="var(--colorBrown)" strokeLinecap="round" strokeLinejoin="round">
                      </path>
                    </svg>

                    </span></span></button>
                  <ul className="career01-top_cycle_point_list_link_child career01-select js-select">
                    <li className="career01-select_list"><a href=""
                      className="career01-select_list_link career01-hover_bg">福利厚生</a></li>
                    <li className="career01-select_list"><a href=""
                      className="career01-select_list_link career01-hover_bg">社宅</a></li>
                    <li className="career01-select_list"><a href=""
                      className="career01-select_list_link career01-hover_bg">研修・キャリア</a></li>
                  </ul>
                </div>
              </li>
              <li className="career01-top_cycle_point_list js-flow is-active">
                <span className="career01-top_cycle_point_list_number career01-list_ttl_icn_small"><span
                  className="career01-list_ttl_icn_small_txt">POINT</span>4</span>
                <div className="career01-top_cycle_point_list_img_wrapper js-flow_item">
                  <Image className="career01-top_cycle_point_list_img"
                    src={top_cycle_point_list_img04} alt="" />
                </div>
                <h4 className="career01-top_cycle_point_list_ttl">本部サポートもあり安心</h4>
                <p className="career01-top_cycle_point_list_txt">園内はもちろんのこと、本部職員や専門カウンセラーなどに相談も可能。悩みを一人で抱えずに働くことができる環境があります。</p>
                <a href=""
                  className="career01-top_cycle_point_list_link career01-hover_bg_arrow">サポート・ケア<span className="career01-arrow_bg"><span
                    className="career01-arrow_icn"> <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L13 6L8 11" stroke="var(--colorBrown)" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                      <path d="M1 6L13 6" stroke="var(--colorBrown)" strokeLinecap="round" strokeLinejoin="round">
                      </path>
                    </svg>

                  </span></span></a>
              </li>
            </ul>
          </div>
          <svg className="career01-top_cycle_point_bg" viewBox="0 0 1366 208" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path
              d="m1366 207.11v-40c-341.5 0-341.5-167.10964905-683-167.10964905s-341.5 167.10964905-683 167.10964905v40z"
              fill="var(--bgColorPink)"></path>
          </svg>
        </div>
        <svg className="career01-top_cycle_bg_top" viewBox="0 0 1366 200" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path
            d="m1366 35.3576s-64.98-27.25913-237.32-33.93422c-172.34-6.6751-372.93 7.23384-591.89 104.57262-218.96 97.339-536.79 38.939-536.79 38.939v55.065h1366z"
            fill="var(--bgColorBoldPink)"></path>
        </svg>
      </section>

      <div className="career01-top_link">
        <div className="career01-top_link_wrapper career01-container">

          <Image className="career01-top_link_dot" src={p_bg_pink_dot01} alt="" />
          <Image className="career01-top_link_illust career01-illust_teature_01" src={p_illust_teacher01}
            alt="" />
        </div>
        <svg className="career01-top_link_bg_top" viewBox="0 0 1366 208" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path d="m1366 0v40c-341.5 0-341.5 167.11-683 167.11s-341.5-167.11-683-167.11v-40z" fill="var(--bgColorPink)">
          </path>
        </svg>
      </div>
    </>
  );
};

export default Career01;
