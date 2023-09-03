// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ChatBot() {
// 	const [inputValue, setInputValue] = useState("");
// 	const [chatLog, setChatLog] = useState([]);
// 	const [isLoading, setIsLoading] = useState(false);

// 	const handleSubmit = (event: any) => {
// 		event.preventDefault();
// 		const data: any = (prevChatLog: any) => [
// 			...prevChatLog,
// 			{ type: "user", message: inputValue },
// 		];

// 		setChatLog(data);

// 		sendMessage(inputValue);

// 		setInputValue("");
// 	};

// 	const sendMessage = (message: any) => {
// 		const url = "/api/chat";

// 		const data = {
// 			model: "gpt-3.5-turbo-0301",
// 			messages: [{ role: "user", content: message }],
// 		};

// 		setIsLoading(true);

// 		axios
// 			.post(url, data)
// 			.then((response: any) => {
// 				console.log(response);
// 				const d: any = (prevChatLog: any) => [
// 					...prevChatLog,
// 					{ type: "bot", message: response.data.choices[0].message.content },
// 				];
// 				setChatLog(d);
// 				setIsLoading(false);
// 			})
// 			.catch((error: any) => {
// 				setIsLoading(false);
// 				console.log(error);
// 			});
// 	};

// 	useEffect(() => {
// 		sendMessage;
// 	}, []);

// 	return (
// 		<div className="container mx-auto max-w-[700px]">
// 			<div className="flex flex-col h-screen bg-gray-900">
// 				<h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl">
// 					ChatGPT
// 				</h1>
// 				<div className="flex-grow p-6">
// 					<div className="flex flex-col space-y-4">
// 						{chatLog.map((message: any, index) => (
// 							<div
// 								key={index}
// 								className={`flex ${
// 									message.type === "user" ? "justify-end" : "justify-start"
// 								}`}
// 							>
// 								<div
// 									className={`${
// 										message.type === "user" ? "bg-purple-500" : "bg-gray-800"
// 									} rounded-lg p-4 text-white max-w-sm`}
// 								>
// 									{message.message}
// 								</div>
// 							</div>
// 						))}
// 						{isLoading && (
// 							<div key={chatLog.length} className="flex justify-start">
// 								<div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
// 									...
// 								</div>
// 							</div>
// 						)}
// 					</div>
// 				</div>
// 				<form onSubmit={handleSubmit} className="flex-none p-6">
// 					<div className="flex rounded-lg border border-gray-700 bg-gray-800">
// 						<input
// 							type="text"
// 							className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
// 							placeholder="Type your message..."
// 							value={inputValue}
// 							onChange={(e) => setInputValue(e.target.value)}
// 						/>
// 						<button
// 							type="submit"
// 							className="bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
// 						>
// 							Send
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// import { useState } from 'react';
// import { OpenAI } from '@openai/api';

// const openai = new OpenAI(process.env.NEXT_PUBLIC_OPENAI_API_KEY);

// export default function ChatGPT() {
//   const [input, setInput] = useState('');
//   const [output, setOutput] : any = useState([]);

//   const handleInputChange = (event : any) => {
//     setInput(event.target.value);
//   };

//   const handleFormSubmit = async (event : any) => {
//     event.preventDefault();
//     const response = await openai.complete({
//       engine: 'davinci',
//       prompt: input,
//       maxTokens: 100,
//       n: 1,
//       stop: '\n',
//     });
//     setOutput([...output, { input, output: response.choices[0].text }]);
//     setInput('');
//   };

//   return (
//     <div>
//       <h1>Chat with GPT-3</h1>
//       <form onSubmit={handleFormSubmit}>
//         <input type="text" value={input} onChange={handleInputChange} />
//         <button type="submit">Send</button>
//       </form>
//       <div>
//         {output.map((item : any, index : any) => (
//           <div key={index}>
//             <strong>You:</strong> {item.input}
//             <br />
//             <strong>ChatGPT:</strong> {item.output}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// function Chatbot() {
// 	const [messages, setMessages]: any = useState([]);

// 	function handleSubmit(event: any) {
// 		event.preventDefault();
// 		const input = event.target.elements.message.value.trim();
// 		if (input.length === 0) return;

// 		// Add user's question to messages array
// 		setMessages((prevMessages: any) => [
// 			...prevMessages,
// 			{ sender: "You", message: input },
// 		]);

// 		event.target.elements.message.value = "";
// 		fetch(
// 			"http://ec2-13-239-6-44.ap-southeast-2.compute.amazonaws.com:5050/chatbot",
// 			{
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify({ message: input }),
// 			}
// 		)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				// Add bot's response to messages array
// 				setMessages((prevMessages: any) => [
// 					...prevMessages,
// 					{ sender: "Bot", message: data.message },
// 				]);

// 				// If bot's response contains a question, add it to messages array
// 				if (data.question) {
// 					setMessages((prevMessages: any) => [
// 						...prevMessages,
// 						{ sender: "Bot", message: data.question },
// 					]);
// 				}
// 			});
// 	}

// 	return (
// 		<div className="h-screen w-200 flex flex-col justify-between p-4 bg-green-100">
// 			<h1 className="text-2xl font-bold mb-4 text-green-800">Eco Chatbot</h1>
// 			<ul className="flex-1 overflow-auto">
// 				{messages?.map((message: any, index: any) => (
// 					<li
// 						key={index}
// 						className={`my-2 ${
// 							message.sender === "You" ? "text-right" : "text-left"
// 						}`}
// 					>
// 						<span className="font-bold text-green-800">{message.sender}: </span>
// 						{message.message}
// 					</li>
// 				))}
// 			</ul>
// 			<form className="flex" onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					id="input-message"
// 					name="message"
// 					placeholder="Type your message..."
// 					className="flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-green-500"
// 				/>
// 				<button
// 					type="submit"
// 					className="px-4 rounded-r-lg bg-green-500 text-white hover:bg-green-600 focus:outline-none"
// 				>
// 					Send
// 				</button>
// 			</form>
// 		</div>
// 	);
// }

// export default Chatbot;

import { useState, useEffect } from "react";
import axios from "axios";

export default function ChatBot({ close }: any) {
	const [inputValue, setInputValue]: any = useState("");
	const [chatLog, setChatLog]: any = useState([]);
	const [isLoading, setIsLoading]: any = useState(false);
	const [prompt, setprompt] = useState("");
	const [promptArray, setPromptArray]: any = useState([]);

	const handleSubmit = (event: any) => {
		event.preventDefault();

		setChatLog((prevChatLog: any) => [
			...prevChatLog,
			{ type: "user", message: inputValue },
		]);

		sendMessage(inputValue);

		setInputValue("");
	};

	const sendMessage = (message: any) => {
		const url = "/api/chat";

		const data = {
			model: "gpt-3.5-turbo-0301",
			messages: [{ role: "user", content: message }],
		};

		setIsLoading(true);

		axios
			.post(url, data)
			.then((response) => {
				setprompt(response.data?.choices?.[0]?.message?.content);
				setChatLog((prevChatLog: any) => [
					...prevChatLog,
					{ type: "bot", message: response.data.choices[0].message.content },
				]);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
			});
	};
	let ques = inputValue;

	return (
		<>
			<div className="flex flex-col z-40 bg-white space-y-4 p-3 overflow-y-auto w-[40vw] h-[60vh] border-2 border-b-0 border-gray-200 absolute bottom-52 right-8">
				<p className="text-black cursor-pointer" onClick={close}>
					&#x274C;
				</p>
				{chatLog.map((message: any, index: any) => (
					<div key={index} className="">
						{message.type == "user" ? (
							<div className="chat-message">
								<div className="flex items-end">
									<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
										<div>
											<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
												{ques}
											</span>
										</div>
									</div>
									<img
										src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
										alt="user profile"
										className="w-6 h-6 rounded-full order-1"
									/>
								</div>
							</div>
						) : (
							<div className="chat-message">
								<div className="flex items-end justify-end">
									<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
										<div>
											<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
												{prompt.length > 50 ? (
													prompt
														.split("-" || "/n" || "/")
														.map((item: any, d: any) => {
															return <p key={d}>{item}</p>;
														})
												) : (
													<p>{prompt}</p>
												)}
											</span>
										</div>
									</div>
									<img
										src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
										alt="My profile"
										className="w-6 h-6 rounded-full order-2"
									/>
								</div>
							</div>
						)}
					</div>
				))}
				{isLoading && (
					<div key={chatLog.length} className="flex justify-start">
						<div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
							...
						</div>
					</div>
				)}
			</div>
			<div className="border-t-2 absolute bottom-10 z-20 w-[40vw] right-8 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
				<div className="relative flex">
					<span className="absolute inset-y-0 flex items-center">
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-6 w-6 text-gray-600"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
								></path>
							</svg>
						</button>
					</span>
					<input
						type="text"
						placeholder="Write your prompt!"
						value={inputValue}
						onChange={(e: any) => setInputValue(e.target.value)}
						className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
					/>
					<div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
						<button
							type="button"
							onClick={handleSubmit}
							className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
						>
							<span className="font-bold">Send</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-6 w-6 ml-2 transform rotate-90"
							>
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
