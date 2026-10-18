'use strict';

/**
 * 
 * @param {number} rating 
 * @returns {boolean}
 */

function isValidRating(rating) {
    return typeof rating === 'number' && Number.isFinite(rating) && rating >= 0;
}

/**
 * 
 * @param {number} winnerRating 
 * @param {number} loseRating 
 * @returns {number}
 */

function calculateNewRating(winnerRating, loseRating) {

    if (!isValidRating(winnerRating) || !isValidRating(loseRating)) {
        return NaN;
    }

    let newRating = 0;

    if (winnerRating === 0) {
        newRating = loseRating;
    } else if (loseRating === 0) {
        newRating = winnerRating;
    } else if (winnerRating < loseRating) {
        newRating = winnerRating + (loseRating - winnerRating + 5) / 3;
    } else {
        const ratingDifference = winnerRating - loseRating;

        if (ratingDifference >= 0 && ratingDifference <= 2) {
            newRating = winnerRating + 2;
        } else if (ratingDifference > 2 && ratingDifference < 20) {
            newRating = winnerRating + 1;
        } else {
            newRating = winnerRating;
        }
    }

    return Number(newRating.toFixed(1));


}


console.log(calculateNewRating(40, 45));