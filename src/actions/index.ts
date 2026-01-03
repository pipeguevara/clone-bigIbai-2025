import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { saveNewsletterEmail } from '../newsletter/services/subscribe';

export const server = {
    newsletter: defineAction({
        input:z.object({
            email: z.string().email()
        }),
        async handler({ email }) {
            const { duplicate, success, error } = await saveNewsletterEmail(email);

            if(!success){
                throw new Error("This email is not allowed.");
            }

            if(duplicate){
                return {
                    messege: 'This email is already subscribed to the newsletter.',
                    success: true
                }
            }

            return { success: true
                , messege: 'Thank you for subscribing to the newsletter!'
             };
        }
    })
}