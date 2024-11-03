if (window.ymaps) {
  setTimeout(
    function tick() {
      ymaps.ready(function () {
        var yandexMap = new ymaps.Map('map', {
          center: [55.8379, 37.4419],
          zoom: 16
        }, {
          searchControlProvider: 'yandex#search'
        }),

          myPlacemark = new ymaps.Placemark(yandexMap.getCenter(), {}, {})
        yandexMap.behaviors.disable('scrollZoom');
        yandexMap.geoObjects.add(myPlacemark)
      });

    }, 1000
  );
}
