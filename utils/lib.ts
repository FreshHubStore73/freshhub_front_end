import { cookies } from 'next/headers';

export async function getSession() {
    const token = cookies().get('user_session')?.value;
    if (!token) return null;

    const base64urlDecode = (str: string) => {
        // Замена символов, используемых в base64url на символы, используемые в base64
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        // Декодирование base64 строки
        const decoded = Buffer.from(base64, 'base64').toString('utf-8');
        return decoded;
    };

    const decodeJWT = (token: string) => {
        // Разбивка токена на три части: header, payload, signature
        const [headerB64, payloadB64, signature] = token.split('.');

        // Декодирование заголовка и полезной нагрузки из base64
        // const header = JSON.parse(base64urlDecode(headerB64));
        const payload = JSON.parse(base64urlDecode(payloadB64));

        return payload;
    };

    return decodeJWT(token);
}

export async function logout() {
    // Destroy the session
    cookies().set('user_session', '', { expires: new Date(0) });
}
