"use client"
import { Button } from "@repo/ui/components/button"
import { Card, CardContent } from "@repo/ui/components/card"
import { MessageCircle, Users, Database, Share2, Zap, Shield, ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function LandingPage() {
  const router = useRouter();
  const scrollRef = useRef<null | HTMLDivElement>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-950 to-red-900">
      {/* Navigation */}
      <nav className="border-b border-orange-700/50 bg-red-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">RoomWire</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => router.push("/login")}
                variant="ghost" className="text-gray-300 hover:text-white hover:bg-orange-900/30">
                Login
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                className="bg-orange-600 hover:bg-orange-700 text-white">Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Connect Instantly with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">RoomWire</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create live chat rooms in seconds. Share the room name, start talking, and never lose your conversations
            with persistent messaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push("/login")}
              size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
              Create Your First Room
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-400 hover:bg-orange-900/30 px-8 py-4 text-lg"
              onClick={() => {
                scrollRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See How It Works <ArrowDown />
            </Button>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={scrollRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">See RoomWire in Action</h3>
              <p className="text-gray-300 text-lg">
                Experience the simplicity of creating and joining chat rooms. Our intuitive interface makes connecting
                with others effortless and enjoyable.
              </p>
            </div>
            <div className="rounded-lg min-h-[300px] flex items-center justify-center">
              <Image
                alt="demo image"
                src={"/image.png"}
                width={800}
                height={800}
                className="w-full rounded-md shadow-md hover:shadow-lg rotate-2 shadow-red-600 hover:scale-105 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-950/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose RoomWire?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple, fast, and reliable chat rooms that keep your conversations alive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-red-900/40 border-orange-800/30 hover:border-orange-600/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Instant Rooms</h3>
                </div>
                <p className="text-gray-300">
                  Create chat rooms instantly. No complex setup, no waiting - just name your room and start chatting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-900/40 border-orange-800/30 hover:border-orange-600/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Share2 className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Easy Sharing</h3>
                </div>
                <p className="text-gray-300">
                  Share your room name with friends, colleagues, or anyone. They join instantly with just the room name.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-900/40 border-orange-800/30 hover:border-orange-600/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Persistent Chats</h3>
                </div>
                <p className="text-gray-300">
                  Never lose your conversations. All messages are stored securely and available whenever you return.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-900/40 border-orange-800/30 hover:border-orange-600/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Live Collaboration</h3>
                </div>
                <p className="text-gray-300">
                  Real-time messaging with multiple participants. See who's online and chat seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-900/40 border-orange-800/30 hover:border-orange-600/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Secure & Private</h3>
                </div>
                <p className="text-gray-300">
                  Your conversations are protected with modern security practices and privacy controls.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-900/40 border-orange-800/30 hover:border-orange-600/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Simple Interface</h3>
                </div>
                <p className="text-gray-300">
                  Clean, intuitive design that gets out of your way. Focus on the conversation, not the interface.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Interface Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className=" rounded-lg p-8 min-h-[350px] flex items-center justify-center">
              <Image
                alt="demo image"
                src={"/image2.png"}
                height={800}
                width={800}
                className="w-[1000px] rounded-md shadow-md hover:shadow-lg -rotate-2 shadow-red-600 hover:scale-105 transition-all"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Real-Time Conversations</h3>
              <p className="text-gray-300 text-lg mb-6">
                Watch messages appear instantly as people type. Our live chat interface keeps everyone connected and
                engaged in real-time conversations.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-orange-500 mr-3" />
                  Instant message delivery
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-3" />
                  See who's online
                </li>
                <li className="flex items-center">
                  <Database className="h-5 w-5 text-orange-500 mr-3" />
                  Message history preserved
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Started in 3 Steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sign Up</h3>
              <p className="text-gray-300">Create your free RoomWire account in seconds</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Create Room</h3>
              <p className="text-gray-300">Name your chat room and customize your settings</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Share & Chat</h3>
              <p className="text-gray-300">Share the room name and start your live conversation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-800/60 to-orange-800/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Connect?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust RoomWire for their live conversations
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 text-xl">
            Start Chatting Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-950 border-t border-orange-600/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <MessageCircle className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold text-white">RoomWire</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <Link href="#" className="hover:text-orange-400 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-orange-400 transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-orange-400 transition-colors">
                Support
              </Link>
              <Link href="#" className="hover:text-orange-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-red-800 text-center text-gray-400">
            <p>&copy; 2024 RoomWire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
