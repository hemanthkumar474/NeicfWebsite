
    var headerApp = angular.module('headerApp', []);
    


    headerApp.directive('headerMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/header.html',
         }
    });

   

    headerApp.directive('footerMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/footer.html'
        }
    });

    headerApp.directive('eventsSideMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/upcomingevents.html'
        }
    });

    headerApp.directive('eventsMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/upcomingeventsmain.html'
        }
    });

    headerApp.directive('events', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/events.html'
        }
    });
    headerApp.directive('dailyVerse', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/dailyverse.html'
        }
    });
    headerApp.controller('headerCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.bannerGallery = ["images/banner.jpg",
            "images/banner1.jpg",
            "images/banner2.jpg",
        ];
    }]);

    headerApp.directive('menuItems', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/menuitems.html',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    console.log(scope);
                    console.log(elem);
                    console.log(attrs);
                    console.log(this);
                });
            }
        }
    });

   function getAllEvents() {
        return [
            {
                date: 12,
                month: "Jan",
                year: 2018,
                servicename: "All Night Prayer",
                location: "Bro. Kiran and Sis. Keerthi Kongala's home",
                starttime: "09:00 pm",
                endtime: "2:00 am",
                image: "images/event/prayer.jpg",
                speaker: "N/A",
                desc: "",
                url:""
            },
            {
                date: 19,
                month: "Jan",
                year: 2018,
                servicename: "Shrewsbury Bible Study",
                location: "TBA",
                starttime: "7:00 pm",
                endtime: "9:30 pm",
                image: "images/event/fellowship.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 27,
                month: "Jan",
                year: 2018,
                servicename: "Monthly Fellowship",
                location: "Grace Baptist Church, Hudson",
                starttime: "5:00 pm",
                endtime: "7:00 pm",
                image: "images/event/fellowship.jpg",
                speaker: "Rev. John Kishore Mylabathula",
                desc: "followed by pot-lock dinner",
                url: "http://shopharministries.com/about_us"
            },
            {
                date: 2,
                month: "Feb",
                year: 2018,
                servicename: "Shrewsbury Bible Study",
                location: "TBA",
                starttime: "7:00 pm",
                endtime: "9:30 pm",
                image: "images/event/fellowship.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 9,
                month: "Feb",
                year: 2018,
                servicename: "All Night Prayer",
                location: "Bro.Nathan and Sis.Mary's home",
                starttime: "09:00 pm",
                endtime: "2:00 am",
                image: "images/event/prayer.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 16,
                month: "Feb",
                year: 2018,
                servicename: "Shrewsbury Bible Study",
                location: "TBA",
                starttime: "7:00 pm",
                endtime: "9:30 pm",
                image: "images/event/fellowship.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 24,
                month: "Feb",
                year: 2018,
                servicename: "Monthly Fellowship",
                location: "Grace Baptist Church, Hudson",
                starttime: "5:00 pm",
                endtime: "7:00 pm",
                image: "images/event/fellowship.jpg",
                speaker: "TBA",
                desc: "followed by pot-lock dinner",
                url: ""
            },
             {
                 date: 2,
                 month: "Mar",
                 year: 2018,
                 servicename: "Shrewsbury Bible Study",
                 location: "TBA",
                 starttime: "7:00 pm",
                 endtime: "9:30 pm",
                 image: "images/event/fellowship.jpg",
                 speaker: "N/A",
                 desc: "",
                 url: ""
             },
            {
                date: 9,
                month: "Mar",
                year: 2018,
                servicename: "All Night Prayer",
                location: "Bro.Immanuel Sammeta & Sis.Sulochana's home",
                starttime: "09:00 pm",
                endtime: "2:00 am",
                image: "images/event/prayer.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 16,
                month: "Mar",
                year: 2018,
                servicename: "Shrewsbury Bible Study",
                location: "TBA",
                starttime: "7:00 pm",
                endtime: "9:30 pm",
                image: "images/event/fellowship.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 30,
                month: "Mar",
                year: 2018,
                servicename: "Good Friday Service",
                location: "Chapel of the Cross, Westborough, MA",
                starttime: "11:00 am",
                endtime: "3:00 pm",
                image: "images/event/fellowship.jpg",
                speaker: "TBA",
                desc: "followed by pot-lock dinner",
                url: ""
            },
			{
                date: 1,
                month: "Apr",
                year: 2018,
                servicename: "Easter Celebrations",
                location: "Social room, Fountainhead Apartments, Westborough, MA",
                starttime: "5:00 pm",
                endtime: "7:00 pm",
                image: "images/event/fellowship.jpg",
                speaker: "N/A",
                desc: "Everyone is welcome - followed by dinner",
                url: ""
            },
			{
                 date: 6,
                 month: "Apr",
                 year: 2018,
                 servicename: "Shrewsbury Bible Study",
                 location: "Bro. Immanuel Sammeta & sis. Sulochana's home",
                 starttime: "7:00 pm",
                 endtime: "9:30 pm",
                 image: "images/event/fellowship.jpg",
                 speaker: "N/A",
                 desc: "",
                 url: ""
             },
            {
                date: 13,
                month: "Apr",
                year: 2018,
                servicename: "All Night Prayer",
                location: "Bro.Elisha Tanikonda & Sis.Srujana's home",
                starttime: "09:00 pm",
                endtime: "2:00 am",
                image: "images/event/prayer.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 20,
                month: "Apr",
                year: 2018,
                servicename: "Shrewsbury Bible Study",
                location: "TBA",
                starttime: "7:00 pm",
                endtime: "9:30 pm",
                image: "images/event/fellowship.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 28,
                month: "Apr",
                year: 2018,
                servicename: "Monthly Fellowship",
                location: "Grace Baptist Church, Hudson, MA",
                starttime: "5:00 am",
                endtime: "7:00 pm",
                image: "images/event/fellowship.jpg",
                speaker: "Ps. Dave Gadoury,  Executive Director of \"Together\"",
                desc: "followed by pot-lock dinner",
                url: "https://www.togetheradvancethegospel.com"
            },
            {
                date: 5,
                month: "May",
                year: 2018,
                servicename: "PrayerDrive-Across State of Massachusetts",
                location: "Across State of Massachusetts",
                starttime: "8:00 am",
                endtime: "8:00 pm",
                image: "images/event/prayerdrive.jpg",
                speaker: "N/A",
                desc: "Click below url for more information",
                url: "http://www.neicf.net/prayerdrive2018.html"
            },
            {
                date: 11,
                month: "May",
                year: 2018,
                servicename: "All Night Prayer",
                location: "Bro.Vijay and Sis.Sindhu's home",
                starttime: "09:00 pm",
                endtime: "2:00 am",
                image: "images/event/prayer.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 18,
                month: "May",
                year: 2018,
                servicename: "Shrewsbury Bible Study",
                location: "TBA",
                starttime: "7:00 pm",
                endtime: "9:30 pm",
                image: "images/event/fellowship.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 26,
                month: "May",
                year: 2018,
                servicename: "Monthly Fellowship",
                location: "Grace Baptist Church, Hudson",
                starttime: "5:00 pm",
                endtime: "7:00 pm",
                image: "images/event/fellowship.jpg",
                speaker: "TBA",
                desc: "followed by pot-lock dinner",
                url: ""
            },
            {
                date: 1,
                month: "Jun",
                year: 2018,
                servicename: "Shrewsbury Bible Study",
                location: "TBA",
                starttime: "7:00 pm",
                endtime: "9:30 pm",
                image: "images/event/fellowship.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 8,
                month: "Jun",
                year: 2018,
                servicename: "All Night Prayer",
                location: "Bro.John  and Sis.Sarah Aluru's home",
                starttime: "09:00 pm",
                endtime: "2:00 am",
                image: "images/event/prayer.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 15,
                month: "Jun",
                year: 2018,
                servicename: "Shrewsbury Bible Study",
                location: "Bro.Vijay and Sis.Sindhu's home",
                starttime: "7:00 pm",
                endtime: "9:30 pm",
                image: "images/event/fellowship.jpg",
                speaker: "N/A",
                desc: "",
                url: ""
            },
            {
                date: 23,
                month: "Jun",
                year: 2018,
                servicename: "Boston Blessing Festival (hosted by Indian Community Church)",
                location: "217 W Central St, Natick, MA - 01760",
                starttime: "5:00 pm",
                endtime: "7:00 pm",
                image: "images/event/Boston Blessing Festival.jpeg",
                speaker: "Ps. John Wesley (Hosanna Ministries)",
                desc: "June 22 at 6:30pm and Saturday 10:30 am - 5:00 pm (lunch at 1pm)",
                url: ""
            },
        ];
    };

    function getFutureEvents(){
        var allEvents=getAllEvents();
        var futureEvents=[];
        angular.forEach(allEvents, function(e) {
            if(isDateInFuture(e)===true){
                futureEvents.push(e);
            };
        });
        return futureEvents;
    }

    function isDateInFuture (e) {
        var date = new Date();
        var monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var isInFuture = (e.year >= date.getFullYear() && monthsList.indexOf(e.month) >= date.getMonth());
        if (monthsList.indexOf(e.month) == date.getMonth()) {
            isInFuture = e.date >= date.getDate();
        }
        return isInFuture;
    };

    headerApp.controller('eventsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.events = getFutureEvents();
    }]);

    