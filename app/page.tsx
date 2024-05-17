import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <div className="text-3xl">Hello</div>

      <h3 className="text-2xl font font-semibold">User session data: </h3>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              type="submit"
              color="primary"
              variant="bordered"
              startContent={<FaRegSmile size={20} />}
            >
              Sign Out
            </Button>
          </form>
        </div>
      ) : (
        <div>Not Signed In</div>
      )}
    </div>
  );
}
