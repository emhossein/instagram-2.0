import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  theme: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png',
    brandColor: '#f13287',
    colorScheme: 'auto',
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});
