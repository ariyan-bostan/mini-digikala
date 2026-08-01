import React from "react";

const Poster = () => {
  return (
    <div className="w-50 d-flex align-items-center">
      <img
        style={{ width: "2.5rem", height: "auto" }}
        className="object-fit-contain ms-2"
        src="https://dkstatics-public.digikala.com/digikala-static/0d072059918d0c22b88320554ce4b3e07d0472f2_1746354551.svg"
        alt=""
      />
      <img
        style={{ width: "7rem", height: "auto" }}
        className="object-fit-contain"
        src="https://dkstatics-public.digikala.com/digikala-static/e0c05f5d67bf71be7605ec22cb3ee6be57d43e94_1746354561.svg"
        alt=""
      />
    </div>
  );
};

export default Poster;
