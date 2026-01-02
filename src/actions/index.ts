import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    newsletter: defineAction({
        input:z.object({
            email: z.string().email()
        }),
        async handler({ email }) {
            console.log(email);

            if(email === "a34750567@gmail.com"){
                throw new Error("This email is not allowed.");
            }

            return { success: true };
        }
    })
}