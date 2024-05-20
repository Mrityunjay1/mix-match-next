"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { calculateAge } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import { CardBody, CardFooter, Divider, Image, Link } from "@nextui-org/react";
import { Member } from "@prisma/client";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {
  member: Member;
};

function MobileMemberSidebar({ member }: Props) {
  const pathname = usePathname();
  const basePath = `/members/${member.userId}`;
  const navLinks = [
    {
      name: "Profile",
      href: `${basePath}`,
    },
    {
      name: "Photos",
      href: `${basePath}/photos`,
    },
    {
      name: "Chat",
      href: `${basePath}/chat`,
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="ghost" className="fixed top-[100px] left-10">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="flex flex-col items-center">
          <Image
            height={150}
            width={150}
            src={member.image || "/image/user.png"}
            alt="profile image"
            className="rounded-full mt-6 aspect-square object-cover"
          />
        </SheetHeader>
        <>
          <div className="flex flex-col items-center">
            <div className="text-2xl">
              {member.name},{calculateAge(member.dateOfBirth)}
            </div>
            <div className="text-sm text-neutral-500">
              {member.city},{member.country}
            </div>
          </div>
          <Divider className="my-3" />
          <nav className="flex flex-col p-4 ml-4 text-2xl gap-4">
            {navLinks.map((link) => {
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={`block rounded ${
                    pathname === link.href
                      ? "text-red-500"
                      : "hover:text-secondary/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </>
        <SheetFooter className="absolute bottom-10 w-full px-12">
          <Button
            as={Link}
            href="/members"
            fullWidth
            color="danger"
            variant="bordered"
          >
            Go Back
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMemberSidebar;
