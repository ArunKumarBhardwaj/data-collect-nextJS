import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center p-24 bg-white">
      <Card className="w-4/12">
        <CardHeader>
          <CardTitle>Register Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="name">Name</Label>
          <Input type="email" placeholder="Email" />
        </CardContent>
        <CardContent>
          <Label htmlFor="name">Username</Label>
          <Input type="email" placeholder="Email" />
        </CardContent>
        <CardContent>
          <Label htmlFor="name">Password</Label>
          <Input type="password" placeholder="Password" />
        </CardContent>
        <CardFooter className=" justify-center">
          <Button className="w-full">Register</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
