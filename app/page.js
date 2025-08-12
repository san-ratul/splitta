import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import {FEATURES, STEPS, TESTIMONIALS} from "@/lib/landing";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge variant="outline" className="bg-green-100 text-green-700">
            No drama, just Splitta.
          </Badge>

          <h1 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-7xl">
            The smartest way to split expenses with friends
          </h1>

          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Track shared expenses, split bills effortlessly, and settle up quickly. Never worry about who owes who again
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 capitalize"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-green-600 text-green-700  hover:text-green-700 hover:bg-green-50 capitalize"
            >
              <Link href="#how-it-works">
                See how it works
              </Link>
            </Button>
          </div>

          <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
            <div className="gradient p-1 aspect-[16/9]">
              <Image
                src="/hero-image.png"
                alt="banner"
                width={1280}
                height={720}
                className="rounded-lg mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Features
          </Badge>

          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Everything you need to split expenses with friends.
          </h2>


          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Our platform provides all the tools you need to handle shared expenses with ease.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              FEATURES.map(({title, Icon, bg, color, description }) => (
                <Card
                  key={title}
                  className="flex flex-col items-center space-y-4 p-6 text-center"
                >
                  <div className={`rounded-full p-3 ${bg}`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <h3 className="text-xl font-bold">
                    {title}
                  </h3>
                  <p className="text-gray-500">{description}</p>
                </Card>
              ))
            }
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">

          <Badge variant="outline" className="bg-green-100 text-green-700 capitalize">
            How it works
          </Badge>

          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Splitting expenses has never been easier
          </h2>


          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Follow these simple steps to start tracking and splitting expenses with friends.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              STEPS.map(({title,label, description }) => (
                <div key={title} className="flex flex-col items-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                    {label}
                  </div>
                  <h3 className="text-xl font-bold">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-center">{description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-green-100 text-green-700 capitalize">
            Testimonials
          </Badge>

          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            What our users are sharing
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
            {
              TESTIMONIALS.map(({ quote, name, role, image }) => (
                <Card key={quote}>
                  <CardContent className="space-x-4 p-6">
                    <p className="text-gray-500">{quote}</p>

                    <div className="flex items-center space-x-3 mt-4">
                      <Avatar>
                        <AvatarImage src={image} alt={name} />
                        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <div className="text-left">
                        <p className="text-sm font-medium">{name}</p>
                        <p className="text-sm text-muted-foreground">{role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </section>

      <section className="gradient py-20">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
            Ready to simplify expense sharing
          </h2>

          <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed">
            Join thousands of users who have made splitting expenses stress-free
          </p>

          <Button
            asChild
            size="lg"
            className="bg-green-800 hover:opacity-90"
          >
            <Link href="/dashboard">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
        <p className="w-full text-center">
          Made with &#128151; by
          <Link href="https://aboutratul.com" className="font-medium text-green-700 mx-2">
            Saleh Ahammed Noor
          </Link>
        </p>
        <p className="w-full text-center">
          Inspired by RoadsideCoder
        </p>
      </footer>
    </div>
  );
}
