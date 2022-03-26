import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion, useAnimation } from "framer-motion";

const sectionVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const imgVariants = {
  offscreen: {
    scale: 1.01,
  },
  onscreen: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};
const textVariants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.25,
    },
  },
};

function WorksTitle({ text }) {
  return (
    <h3 className={styles.sectionTitle}>
      {Array.from(text).map((_, i) => (
        <motion.span
          viewport={{ once: true }}
          initial={{ y: 4 * (Array.from(text).length - i), opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1.2, delay: 0.1 * i }}
        >
          {_}
        </motion.span>
      ))}
    </h3>
  );
}

function SectionTitle({ text }) {
  return (
    <h2>
      {Array.from(text).map((_, i) => (
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1.2, delay: 0.1 * i }}
        >
          {_}
        </motion.span>
      ))}
    </h2>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JAPANESQUE YAKAI 名古屋城夜会</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <a className={styles.headerLogo}>
          <img src="/logo_1-10.png" alt="1→10" className="img-responsive"></img>
        </a>
        <div className={styles.headerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <main className={styles.main}>
        <div className={`${styles.pageHeader} ${styles.sectionInner}`}>
          <h1 className={styles.pageTitle}>
            JAPANESQUE <br className="hidden-md" />
            YAKAI
            <br />
            <span>名古屋城夜会</span>
          </h1>
          <p className={styles.date}>Launch 2020.4.15</p>
          <a href="#" className={`${styles.link} ${styles.pageHeaderLink}`}>
            VISIT SITE
          </a>
        </div>
        <div className={styles.hero}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={imgVariants}
          >
            <img
              className="img-responsive"
              src="/img-main.jpg"
              alt=" JAPANESQUE YAKAI 名古屋城夜会"
            ></img>
          </motion.div>
        </div>
        <div className={styles.sectionInner}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <WorksTitle text="OUTLINE" />
            <p>
              古くからある日本各地の伝統文化を見直し、革新的なクリエイティブやテクノロジーを掛け合わせる日本文化更新プロジェクト「JAPANESQUE
              PROJECT（ジャパネスクプロジェクト）」の一環として、 『名古屋城夜会
              by 1→10』の総合演出を手がけました。
              <br />
              このイベントは名古屋を代表する観光スポットの筆頭として挙げられる名古屋城にて、2019年12月14日から2020年1月13日までの27日間実施しました。
            </p>
          </motion.div>
          <div className={styles.poster}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={imgVariants}
            >
              <img className="img-responsive" src="/img-01.jpg"></img>
            </motion.div>
          </div>
          <WorksTitle text="MISSION" />
          <p>
            演出のテーマは、NAGOYA MEETS NEW HISTORY。
            <br />
            城壁に印された名古屋城を築いた大名らの刻印を浮かび上がらせるライトアップ、伝統工芸品である名古屋提灯によって宴の会場へと誘われる小道、有松鳴海絞の文様が空間を染め上げるプロジェクションなど、尾張名古屋の伝統や古き良き文化を再発見し、そこに革新的なアイデアや先端テクノロジーを掛け合わせることで「新たな名古屋の姿」を発信しました。
          </p>
        </div>
        <div className={styles.images}>
          <ul>
            <li>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={imgVariants}
              >
                <img
                  src="/img-02.jpg"
                  alt="JAPANESQUE YAKAI 名古屋城夜会"
                ></img>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={imgVariants}
              >
                <img
                  src="/img-03.jpg"
                  alt="JAPANESQUE YAKAI 名古屋城夜会"
                ></img>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={imgVariants}
              >
                <img
                  src="/img-04.jpg"
                  alt="JAPANESQUE YAKAI 名古屋城夜会"
                ></img>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={imgVariants}
              >
                <img
                  src="/img-05.jpg"
                  alt="JAPANESQUE YAKAI 名古屋城夜会"
                ></img>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={imgVariants}
              >
                <img
                  src="/img-06.jpg"
                  alt="JAPANESQUE YAKAI 名古屋城夜会"
                ></img>
              </motion.div>
            </li>
          </ul>
        </div>
        <div className={styles.sectionInner}>
          <WorksTitle text="CREDITS" className={styles.CreditTitle} />
          <div className={styles.creditList}>
            <dl>
              <dt>Client</dt>
              <dd>名古屋城光のイベント実行委員会（主催） </dd>
              <dt>Agency</dt>
              <dd>メ～テレ（共催） </dd>
              <dt>総合プロデュース</dt>
              <dd>澤邊 芳明</dd>
              <dt>クリエイティブディレクター / 総合演出</dt>
              <dd>引地 耕太</dd>
              <dt>制作統括プロデューサー / プロジェクトマネジメント</dt>
              <dd>三木 康博</dd>
              <dt>プランナー</dt>
              <dd>巡 佑太</dd>
              <dt>アートディレクター</dt>
              <dd>小島 鮎子</dd>
              <dt>チーフデザイナー</dt>
              <dd>玉 世麟</dd>
              <dt>ビジュアルデザイナー</dt>
              <dd>
                藤田 真帆、藤平 春奈、坂能 光希、エルアッサー 菜々、藤倉 可奈
              </dd>
            </dl>
            <dl>
              <dt>OtherStaff</dt>
              <dd>
                本丸御殿プロジェクション映像制作協力
                <br />
                プロダクション：P.I.C.S / LIL / TETRA
                <br />
                演出：橋本 大佑（P.I.C.S / LIL）
                <br />
                プロデューサー：井筒 亮太（LIL）
                <br />
                CG・アニメーション：LIL / TETRA
              </dd>
              <dt>音楽</dt>
              <dd>石田 多朗（Drifter）</dd>
              <dt>有松鳴海紋様プロジェクション映像制作協力プロダクション</dt>
              <dd>CEKAI</dd>
              <dt>プロジェクション設計・管理</dt>
              <dd>ヘキサゴンジャパン株式会社</dd>
              <dt>照明音響管理</dt>
              <dd>株式会社ナパリコ</dd>
              <dt>照明デザイン協力</dt>
              <dd>Y2 LIGHTING DESIGN.Co.,Ltd.</dd>
              <dt>照明協力</dt>
              <dd>株式会社六工房</dd>
            </dl>
          </div>
        </div>
        <div className={styles.casestudy}>
          <div className={styles.casestudyTitle}>
            <SectionTitle text="CASE STUDY"></SectionTitle>
          </div>
          <motion.a
            className={styles.caseStudyBlock}
            whileHover={{ opacity: 0.6 }}
            href="#"
          >
            <div className={styles.caseStudyBody}>
              <p className={styles.caseStudyNo}>CASE 01</p>
              <h3 className={styles.caseStudyHeading}>Smart Digital Field</h3>
              <p className={styles.caseStudyDescription}>
                Web技術、MR技術、空間トラッキング技術をプラットフォーム上で複合的に組み合わせることでイベント等における現実空間とそっくりなバーチャル会場をご用意できます。さらに現実と仮想の間でそれぞれの参加者がインタラクションを共有できることで、遠隔からでも等しい価値の体験を提供できます。
              </p>
              <p className={styles.link}>READ MORE</p>
            </div>
            <div className={styles.caseStudyImage}>
              <img
                className="img-responsive hidden-sm"
                src="/img-case-study-01.jpg"
                alt="Smart Digital Field"
              ></img>
              <img
                className="img-responsive hidden-md"
                src="/img-case-study-01_sp.jpg"
                alt="Smart Digital Field"
              ></img>
              <p>現実空間とそっくりなバーチャル会場の様子</p>
            </div>
          </motion.a>
          <motion.a
            className={styles.caseStudyBlock}
            whileHover={{ opacity: 0.6 }}
            href="#"
          >
            <div
              className={styles.caseStudyBody}
              style={{ marginTop: 42 + 'px' }}
            >
              <p className={styles.caseStudyNo}>CASE 02</p>
              <h3 className={styles.caseStudyHeading}>
                世界初の MagicLeap1 を用いた
                <br />
                常設劇場
              </h3>
              <p className={styles.caseStudyDescription}>
                羽田空港そばの HiCity で上演されている、Dejima by 1→10。そこで
                MagicLeap1によるMR体験を提供しています。Magic Leap 1
                の特性を活かした演出で、現実と仮想との融合に挑戦しました。
              </p>
              <p className={styles.link}>READ MORE</p>
            </div>
            <div className={styles.caseStudyImage}>
              <img
                className="img-responsive hidden-sm"
                src="/img-case-study-02.jpg"
                alt="世界初の MagicLeap1 を用いた 常設劇場"
              ></img>
              <img
                className="img-responsive hidden-md"
                src="/img-case-study-02_sp.jpg"
                alt="世界初の MagicLeap1 を用いた 常設劇場"
              ></img>
            </div>
          </motion.a>
        </div>
        <div className={styles.relatedProject}>
          <div className={styles.relatedProjectTitle}>
            <SectionTitle text="RELATED PROJECT"></SectionTitle>
          </div>
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            spaceBetween={10}
            slidesPerView={"auto"}
            loop={"auto"}
            centeredSlides={true}
            modules={[Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className={styles.relatedSlider}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <img className="img-responsive" src="/img-works-01.jpg"></img>
              <p className={styles.relatedProjectCaption}>芝離宮夜会</p>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img className="img-responsive" src="/img-works-02.jpg"></img>
              <p className={styles.relatedProjectCaption}>江戸夏夜会</p>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img className="img-responsive" src="/img-works-03.jpg"></img>
              <p className={styles.relatedProjectCaption}>江戸秋夜会</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </div>
  );
}
