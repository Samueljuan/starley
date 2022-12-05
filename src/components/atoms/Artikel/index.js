import axios from "axios";
import React, { useEffect, useState } from "react";
import ImgArtikel from "../../../assets/img-artikel.svg";

const Artikel = (id) => {
  const [isShown, setIsShown] = useState(false);
  const [article, setArticle] = useState("");
  useEffect(() => {
    const linkAPI = "https://6303aec40de3cd918b3c026a.mockapi.io/article";
    axios
      .get(linkAPI)
      .then((response) => {
        const convertData = Object.values(response.data);
        setArticle(convertData);
        console.log(article[0].getDate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <a
      href={"/artikel/" + id}
      className="flex items-center mt-8 hover:bg-[#24324F] hover:text-white hover:rounded-lg cursor-pointer"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="mx-2 md:w-9/12 md:p-[32px]">
        <p className="font-bold text-base md:text-3xl">
          {/* {article[0].title} */}6 Hal yang bikin jerawatan!
        </p>
        {isShown ? (
          <p className=" opacity-70 text-xs md:text-xl font-normal mt-[10px] md:mt-[30px] text-white pr-[10px] md:pr-[75px] line-clamp-4 d-none md:d-block">
            Jerawat kita bisa definisikan sebagai inflamasi kronis di kulit yang
            menyerang kelenjar minyak kita. Pada dasarnya, terdapat 4 penyebab
            jerawat: 1. Produksi kelenjar keringat yang berlebiha 2.
            Keratinisasi kulit (regenerasi kulit) yang berlebihan 3. Peradangan
            4. Bakteri jerawat (Propionibacterium acnes) Selain 4 penyebab itu,
            banyak sekali faktor yang bisa bikin jerawat kita lebih parah!
            Seperti, polusi, social environment, makanan yang kita makan, hingga
            sosial media! Tidak hanya punya faktor penyebab yang banyak, tapi
            ternyata jerawat diderita 1/10 orang di dunia. Banyaknya angka ini
            membuat jerawat jadi penyakit terbanyak di dunia yang ke 8.
          </p>
        ) : (
          <p className="line-clamp-4 text-xs md:text-xl font-normal mt-[10px] md:mt-[30px] text-[#24324F] pr-[10px] md:pr-[75px]">
            Jerawat kita bisa definisikan sebagai inflamasi kronis di kulit yang
            menyerang kelenjar minyak kita. Pada dasarnya, terdapat 4 penyebab
            jerawat: 1. Produksi kelenjar keringat yang berlebiha 2.
            Keratinisasi kulit (regenerasi kulit) yang berlebihan 3. Peradangan
            4. Bakteri jerawat (Propionibacterium acnes) Selain 4 penyebab itu,
            banyak sekali faktor yang bisa bikin jerawat kita lebih parah!
            Seperti, polusi, social environment, makanan yang kita makan, hingga
            sosial media! Tidak hanya punya faktor penyebab yang banyak, tapi
            ternyata jerawat diderita 1/10 orang di dunia. Banyaknya angka ini
            membuat jerawat jadi penyakit terbanyak di dunia yang ke 8.
          </p>
        )}
        {isShown ? (
          <div className="mt-[30px] pb-2">
            <span className="text-lg font-bold">
              {/* {article[0].kategori} */}
              tips
            </span>
            <span className="text-lg font-normal mx-6 opacity-70">
              {/* {article[0].read} */}3 mins read
            </span>
            <span className="text-lg font-normal opacity-70">7 Juli 2022</span>
          </div>
        ) : (
          <div className="mt-[10px] md:mt-[30px] pb-2">
            <span className="text-[10px] md:text-lg font-bold">
              {/* {article[0].kategori} */}
              tips
            </span>
            <span className="text-[10px] md:text-lg font-normal mx-1 md:mx-6 text-[#1B3E66]">
              {/* {article[0].read} */}3 mins read
            </span>
            <span className="text-[10px] md:text-lg font-normal text-[#1B3E66]">
              7 Juli 2022
            </span>
          </div>
        )}
      </div>
      <div className="mx-2 md:mx-auto">
        <img
          // src="https://loremflickr.com/640/480/fashion"
          src={ImgArtikel}
          alt="Artikel"
          className="max-w-[150px] h-[200px] md:max-w-[280px] md:h-auto"
        />
      </div>
    </a>
  );
};

export default Artikel;
