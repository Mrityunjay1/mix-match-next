import { Spinner } from "@nextui-org/react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex justify-center items-center vertical-center">
      <Spinner label="loading...." color="current" />
    </div>
  );
}

export default Loading;
