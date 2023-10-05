const INTERVAL = 5000

const feedbackQuotes = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error eveniet inventore libero, repudiandae ullam.',
    'Second feedback content consectetur adipisicing elit. Eius',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error eveniet inventore libero, repudiandae ullam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error eveniet inventore libero, repudiandae ullam.',
];

const feedbackNames = [
    'Bin Burhan',
    'Dan Balan',
    'Jennifer Aniston',
];

const feedbackPlaces = [
    'New Deli',
    'Second Place',
    'Third Place',
];

const feedback_photos = [
    'images/avatar2.jpg',
    'images/feedback_photo.png',
    'images/avatar3.jpg',
];

function useFeedbacks () {
    const feedback = document.querySelector('.feedback');
    const feedbackQuote = feedback.querySelector('.feedback_quote');
    const feedbackName = feedback.querySelector('.feedback_name');
    const feedbackPlace = feedback.querySelector('.feedback_place');
    const feedback_photo = feedback.querySelector('.feedback_photo');

    const bars = document.querySelectorAll('.bar');

    let feedbackIdx;

    const changeFeedback = (idx) => {
        feedback.classList.remove('feedback_transition')

        feedbackQuote.textContent = feedbackQuotes[idx];
        feedbackName.textContent = feedbackNames[idx];
        feedbackPlace.textContent = feedbackPlaces[idx];
        feedback_photo.src = feedback_photos[idx]

        bars.forEach((bar) => {bar.classList.remove('active')})
        bars[idx]?.classList?.toggle('active')

        idx < feedbackQuotes.length - 1 ? idx = idx + 1 : idx = 0

        setInterval(() => {
            feedback.classList.add('feedback_transition')
        }, 400)

        return idx
    }

    const initFeedback = () => {
        feedbackIdx = changeFeedback(0)

        bars.forEach((bar, idx) => {
            bar.addEventListener('click', () => {
                clearInterval(setInt)
                feedbackIdx = changeFeedback?.(idx)
                setInt = setInterval(() => {
                    feedbackIdx = changeFeedback(feedbackIdx)
                }, INTERVAL)
            })
        });
    }

    initFeedback()
    let setInt = setInterval(() => {
        feedbackIdx = changeFeedback(feedbackIdx)
    }, INTERVAL)
}

useFeedbacks()
