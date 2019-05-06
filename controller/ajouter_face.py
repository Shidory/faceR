import cv2 as cv
import face_recognition as f
import sys
import _pickle as pickl

s, image, nom = sys.argv

if image != "cam":
    image_array = f.load_image_file(image)
    face_encoding = f.face_encodings(image_array)[0]
    
    with open("faces/" + nom, 'wb') as fp:
        pickl.dump(face_encoding, fp)
    print ("Fait")

if image == "cam":
    cam = cv.VideoCapture(0)
    
    while True:
        _, image_array = cam.read()
        cv.imshow("Press 'a' to add your face", image_array)
        k = cv.waitKey(10)
        if k == ord('a'):
            face_encoding = f.face_encodings(image_array)[0]
            with open("faces/" + nom, 'wb') as fp:
                pickl.dump(face_encoding, fp)
            break
    print ("Fait")
    cam.release()
    cv.destroyAllWindows()