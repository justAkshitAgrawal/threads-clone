import AccountProfile from "@/components/forms/AccountProfile";

import { currentUser } from "@clerk/nextjs";

const Page = async () => {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete the onboarding process to get started with your new account.
      </p>

      <section className="mt-10 bg-dark-2 p-10">
        <AccountProfile />
      </section>
    </main>
  );
};

export default Page;
