let url = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";
fetch(url).then(res => res.json()).then(data => {
    // Đáp án đúng của câu hỏi thứ nhất.
    // Những đáp án sai của câu hỏi thứ hai.
    // Câu hỏi (dạng text) của câu hỏi thứ ba.
    // Những đáp án sai của câu hỏi thứ tư (nếu có).
    // Câu hỏi (dạng text) của câu hỏi thứ năm (nếu có).
})