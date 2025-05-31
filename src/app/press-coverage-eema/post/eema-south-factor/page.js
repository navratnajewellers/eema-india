import PostHeader from "@/app/components/press-coverage/PostHeader";
import { Image } from "rsuite";

export default function Post9() {
  const post1imagesData = [
    "/images/press-coverage/posts-gallery/1556278487_Untitled-1.jpg",
    "/images/press-coverage/posts-gallery/1556278472_Untitled2.jpg",
  ];
  return (
    <>
      <PostHeader postHeading="EEMA South Factor" postDate="Apr 30, 2019" />

      <div className=" flex items-center flex-wrap py-11 mt-11 ">
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
