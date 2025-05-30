import PostHeader from "@/app/components/press-coverage/PostHeader";
import { Image } from "rsuite";

export default function Post1() {
  const post1imagesData = [
    "/images/press-coverage/posts-gallery/1600936922_Free Press Gujarat_Ahm_EEMA_23.08.20_Pg03.jpg",
    "/images/press-coverage/posts-gallery/1600936959_Divya Bhaskar_Ahm_EEMA_26.08.20_Pg11.jpg",
    "/images/press-coverage/posts-gallery/1600937000_Western Times_Ahm_EEMA_23.08.20_Pg03.jpg",
    "/images/press-coverage/posts-gallery/1600937015_Subah Savera_Ahm_EEMA_24.08.20_Pg03.jpg",
    "/images/press-coverage/posts-gallery/1600938506_Prabhat_Ahm_EEMA_23.08.20_Pg06.jpg",
    "/images/press-coverage/posts-gallery/1600938518_NavGujarat Samay_Ahm_EEMA_25.08.20_Pg08.jpg",
    "/images/press-coverage/posts-gallery/1613634056_Virat Vaibhav (27-08-20) Page No - 04 - Dilli Vaibhav.jpg",
  ];
  return (
    <>
      <PostHeader
        postHeading="EEMA GIVES CALL TO OPEN SAFE EVENTS TO SAVE EVENTS"
        postDate="Sep 01, 2020"
      />

      <div className=" flex justify-center items-center flex-wrap py-11 mt-11 ">
        {post1imagesData.map((data, index) => (
          <div key={index} className=" ml-7 mb-11 ">
            <Image
              src={data}
              alt={`image-4${index}`}
              height={470}
              width={300}
            />
          </div>
        ))}
      </div>
    </>
  );
}
