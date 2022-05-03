import { CloseButton } from "../../CloseButton";

import successImageUrl from "../../../assets/success.svg";

interface FeedbackSuccessProps {
  onRestartFeedback(): void;
}

export const FeedbackSuccessStep = ({
  onRestartFeedback,
}: FeedbackSuccessProps): JSX.Element => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="Imagem de sucesso" />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onRestartFeedback}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-offset-brand-500 transition-colors disabled:opacity-50 disabled:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
