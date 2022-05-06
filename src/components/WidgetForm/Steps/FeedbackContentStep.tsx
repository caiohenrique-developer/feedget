import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackTYpe, feedbackTypes } from "..";
import { api } from "../../../libs/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackTypeStepProps {
  feedbackType: FeedbackTYpe;
  onRestartFeedback(): void;
  onFeedbackSent(): void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onRestartFeedback,
  onFeedbackSent,
}: FeedbackTypeStepProps): JSX.Element => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const {
    title,
    image: { source, alt },
  } = feedbackTypes[feedbackType];

  const handleSubmitFeedback = async (ev: FormEvent) => {
    ev.preventDefault();

    setIsSendingFeedback(true);

    await api.post("/feedbacks", { type: feedbackType, comment, screenshot });

    setComment("");
    setIsSendingFeedback(false);
    onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          onClick={onRestartFeedback}
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={source} alt={alt} className="w-6 h-6" />
          {title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(ev) => setComment(ev.target.value)}
          value={comment}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            comment={comment}
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-offset-brand-500 transition-colors disabled:opacity-50 disabled:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};
