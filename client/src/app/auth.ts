import { authClient } from "@/lib/auth-client"; //import the auth client

export const { data, error } = await authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        image, 
        role,//role when signing up
        callbackURL: "/" 
    }, {
        onRequest: (ctx) => {
            console.log("Signing up user with email:", ctx.body.email);
        },
        onSuccess: (ctx) => {
              alert("User registered successfully!");
        },
        onError: (ctx) => {
            alert(ctx.error.message);
        },
});

export const{data , error} = await authClient.signIn.email({
  email,
  password,
  callbackURL: "/",
  rememeberMe: true, 
});

export const signout = await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login"); 
    },
  },
});

