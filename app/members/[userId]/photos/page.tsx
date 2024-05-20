import { getMemberPhotos } from "@/app/actions/memberActions";
import { CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import React from "react";

type Props = {};

async function page({ params }: { params: { userId: string } }) {
  const photos = await getMemberPhotos(params.userId);
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-red-500">
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-3 gap-3">
          {photos &&
            photos.map((photo) => (
              <div key={photo.id}>
                <Image
                  src={photo.url}
                  alt="image-member"
                  className="object-cover aspect-square"
                  width={300}
                  height={300}
                />
              </div>
            ))}
        </div>
      </CardBody>
    </>
  );
}

export default page;
