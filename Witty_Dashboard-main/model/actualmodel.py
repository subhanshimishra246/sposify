import cv2
from cvzone.PoseModule import PoseDetector
cap = cv2.VideoCapture(1)
detector = poseDetector()
shirtFolderPath= "Resource/Shirts"
listShirts=os.listdir("shirtFolderpath)
#print(listshirts)
fixedRatio =262/190
shirtRatioHeightWidth 581/440
imageNumber =0
imageButtonRight=cv2.imread("resource/button.png",cv2.IMREAD_UNCHANGED)
imageButtonLeft=cv2.flip(imgButtonRight,1)
counterLeft=0
counterright=0
selectionspeed=10


while true:
    success, img=cap.read()
    img=detector.findPose(img)
    #img= cv2.flip(img,1)55
    lmList,bboxInfo=detector.findPostion(img, bboxwithHands=false)
    if lmlist:
        #center = bboxInfo["center"]
    lm11=lmList[11][1:3]
    lm12=lmList[12][1;3]
    imgShirt=cv2.imread(os.path.join(shirtFolderpath,listshirts[imageNumber],cv2.IMREAD_UNCHANGED)
                        imgshirt=cv2.resize(imgShirt,(0,0), none,0.5,0.5)
    widthofShirt=int((lm11[0]-lm12[0]*fixedRatio)
                     print(widthofshirt)
    imgShirt=cv2.resize(imgShirt,(widthofshirt,int(widthofshirt*shirtRatioHeightWidth))
                        currentScale=(lml11[0]-lml12[0]/190
    offset=int(44*currentscale),int(48*currentscale)
                        try:
 img=cvzone.overlayPNG(img,imgshirt,(lm12[0]-offset[0],lml12[1]-offset[1])
 except:
pass
img= cvzone.overlayPNG(img,imgButtonRight(1074,293))
img= cvzone.overlayPNG(img,imgButtonLeft(74,293))
if lmList[16][1]<300:
    counterRight+=1
    cv2.ellipse(img,(139,360),(66,66)0,0,
        counterRight*slectionspeed, (0,255,0),20)
    if counterRight*slectionspeed>360:
        counterRight=0
        if imagenumber< len(listShirts)-1:
        imagenumber+=1
    elif lmList[15][1]>900:
        counterLeft+=1
        cv2.ellipse(img, (1138, 360), (66, 66)
        0, 0,
        counterRight * slectionspeed, (0, 255, 0), 20)
        if counterLeft * slectionspeed > 360:
            counterLeft = 0
            if imagenumber >0
                imagenumber -= 1

else:
    counterRight=0
    counterLeft=0



    cv2.imshow("Image", img)
    cv2.waitkey(1)