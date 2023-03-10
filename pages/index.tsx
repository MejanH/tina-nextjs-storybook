import { Inter } from "@next/font/google";
import Head from "next/head";
import { Button } from "~/stories/Button";
import { demoDropdownLinks, Dropdown } from "~/stories/Dropdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Storybook With Nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-10">
        <h1 className="font-bold text-3xl text-center">
          Storybook Components 👇
        </h1>
        <div className="my-10 grid grid-cols-1 gap-6">
          <div>
            <h4 className="text-xl font-bold text-center mb-4">Buttons</h4>
            <div className="flex space-x-6 items-center justify-center">
              <Button label="Primary" variant="primary" />
              <Button label="Secondary" variant="secondary" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-center mb-4">Dropdown</h4>
            <div className="flex space-x-2 items-center justify-center">
              <Dropdown links={demoDropdownLinks} menuBtnLabel="Options" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
