"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";

interface Props {
  picture: Card;
}

export function CardDefault({ picture }: Props) {
  const date = picture.created_at.split("T")[0];

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Link href={picture.links.download}>
          <Image
            src={picture.urls.small}
            fill={true}
            alt="card-image"
            className="hover:scale-105"
          />
        </Link>
      </CardHeader>
      <div className="tags flex flex-wrap justify-start px-6">
        {picture.tags.map((item) => (
          <Chip
            key={picture.id}
            variant="ghost"
            value={item.title}
            className="w-fit font text-[12px] p-1 m-1"
          />
        ))}
      </div>
      <CardBody className="pt-3">
        <Typography className="mb-1 text-sm flex justify-between">
          <div className="flex">
            <HeartIcon strokeWidth={2} className="h-5 w-5 mr-1" />
            <div>{picture.likes}</div>
          </div>
          <div>{date}</div>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-sm">
          {picture.alt_description}
        </Typography>
        <Typography className=" text-sm">
          {picture.description ?? "No description"}
        </Typography>
      </CardBody>
    </Card>
  );
}
