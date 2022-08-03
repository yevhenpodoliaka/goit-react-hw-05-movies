import PropTypes from 'prop-types'
import { ReviewsItem, Title, Text } from './MovieReviewsItem.styled';

export default function MovieReviewsItem({ author, content }) {
    return <ReviewsItem>
        <Title>author: {author}</Title>
        <Text>review:{content}</Text>
    </ReviewsItem>
}

MovieReviewsItem.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}