import { OpenAI } from 'openai';
const openai = new OpenAI({ apiKey: "", dangerouslyAllowBrowser: true });

export async function generateDetailed(detailedAnswers: string[]) {
  const questions = [
    "Consider the role of failure in career growth. How do you approach setbacks and challenges, and what strategies do you employ to bounce back and persevere?",
    "Reflect on the impact you want to have on your community or society through your career.",
    "Reflect on a moment in your life when you felt completely immersed and engaged in what you were doing. What were you doing, and how can you incorporate similar elements into your future career?",
    "Consider the lifestyle you envision for yourself in the future. How does your ideal work-life balance look, and which career paths align with your desired lifestyle?",
    "Consider the future of work and emerging industries. Which trends or technologies do you find most exciting, and how could you position yourself to capitalize on these opportunities?",
    "Reflect on a moment when you felt deeply fulfilled and energized by your work, regardless of whether it was a paid job or a volunteer opportunity. What aspects of that experience can you identify as key drivers for your career satisfaction?",
    "Reflect on your preferred work style and environment. Are you more drawn to structured routines, flexibility, or a mix of both?"
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-4-0125-preview",
    messages: [
      { role: 'system', content: 'You are a Career Assessment quiz results generator' },
      { role: 'user', content: `Give me a list of careers using these answers: ${detailedAnswers.join(', ')} to these Questions: ${questions.join(', ')}. Just give me 3 options and number them.` }
    ],
    temperature: 0.5,
  });

  const result = completion.choices[0].message.content;
  return result;
}

