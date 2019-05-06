import cv2 as cv
import face_recognition as f
import sys
import _pickle as pickl

image, nom = sys.argv

if image != "cam":
    image_array = f.load_image_file(image)
    face_encoding = f.face_encodings(image_array)[0]