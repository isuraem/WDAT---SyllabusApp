import { DummyUsers } from "../../../constants/dummyUsers";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest){
    
    const dummyUser = await request.json();
    const newUser = {
        id: dummyUser.length + 1,
        name: dummyUser.name,
        password: dummyUser.password,
    }
    DummyUsers.push(newUser);

    return new Response(JSON.stringify(newUser),{
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    })
    return Response.json(newUser);
}
