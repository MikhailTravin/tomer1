// Контейнер со всеми видео
const videosWrap = document.querySelector('.videos');


// Обработчик клика
if (videosWrap) {
    const videoEventHandler = (e) => {
        // Если у e.target нет класа video, значит данный элемент не является видео
        if (!e.target.classList.contains('video')) return false;
        const video = e.target,
            allVideos = document.querySelectorAll('.video');

        const overlay = document.querySelectorAll('.play');
        // Останавливаем все видео
        allVideos.forEach((source, index) => {
            if (source === video) return;
            source.classList.remove('isPlaying');
            source.pause();
            overlay[index].classList.remove('_active');
        })
        // Если у видео есть класс isPlaying - тогда остановить его, если нет - запустить
        if (video.classList.contains('isPlaying')) {
            video.closest('div').querySelector('.play').classList.remove('_active');
            video.pause()
        } else {
            video.closest('div').querySelector('.play').classList.add('_active');
            video.play()
        }
        video.classList.toggle('isPlaying')
    }
    // Event listener на контейнер со всеми видео
    videosWrap.addEventListener('click', (e) => videoEventHandler(e))
}