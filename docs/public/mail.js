import nodemailer from 'nodemailer';

// 发布要填的参数：
// 通知接受者的邮箱
const receverEmailList = [
	'zhugt@lonbon.com'
];
// 内容
const text = '';
// 标题
const subject = '';
// 富文本（html形式）
const html = '';

const transporter = nodemailer.createTransport({
	host: 'smtp.163.com',
	port: 465,
	secure: true,
	auth: {
		user: 'zhugangtao98@163.com',
		pass: 'GWFSGHYQQPYGZHKE',
	},
});

async function main() {
	const info = await transporter.sendMail({
		from: 'zhugangtao98@163.com',
		to: receverEmailList.join(','),
		subject,
		text,
		html,
	});
	console.log('邮件发送成功：', info.messageId);
}

main().catch(console.error);
